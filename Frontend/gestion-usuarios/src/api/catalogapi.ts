import z from "zod";
import api from "../helper/axios";
import { departamentoSchema, rolSchema } from "../types";

const END_POINT_DEPARTAMENTOS = '/departamentos';
const END_POINT_ROLES = '/roles';

export async function findAllDepartamentos() {
    try {
        const {data} = await api.get(
            `${END_POINT_DEPARTAMENTOS}`
        );
        const response = z.array(departamentoSchema).safeParse(data);

        if (response.success) {
            return response.data
        }
    } catch (error) {
        
    }
}

export async function findAllRoles() {
    try {
        const {data} = await api.get(
            `${END_POINT_ROLES}`
        );
        const response = z.array(rolSchema).safeParse(data);

        if (response.success) {
            return response.data
        }
    } catch (error) {
        
    }
}