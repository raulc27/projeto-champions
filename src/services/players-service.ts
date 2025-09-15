import { findAllPlayers, findPlayerById } from "../repositories/players-repository";
import { ok, noContent } from "../utils/http-helper";


export const getPlayerService = async () => {
       
    const data = await findAllPlayers();
    let response = null;

    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}

export const getPlayerByIdService = async (
    id: number
) => {
    const data = await findPlayerById(id);
    let response = null;

    if(data){
        response = ok(data);
    } else {
        response = noContent();
    }

    return response;
}