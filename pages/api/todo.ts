import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export type NewTodo = {
    title: string;
    detail: string;
    date: string;
};

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { title, detail, date } = JSON.parse(req.body.body) as NewTodo;
        const result = await prisma.todo.create({
            data: {
                title: title,
                detail: detail,
                date: date,
            },
        });
        res.json(result);
    } else if (req.method === "DELETE") {
        if (typeof req.query.id !== "string") {
            throw new Error("id is not string");
        }
        const id = Number(req.query.id);
        const result = await prisma.todo.delete({ where: { id } });
        res.json(result);
    } else if (req.method === "GET") {
        const result = await prisma.todo.findMany();
        res.json(result);
    }
}
