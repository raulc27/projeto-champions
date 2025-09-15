import { IPlayerModel } from "../models/player-model";


const database: IPlayerModel[] = [
    {
        id: 1,
        name: "Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    },
    {
        id: 2, name: "Ronaldo",
        club: "Paris Saint-Germain",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }

    }
];

export const findAllPlayers = async () => {
    return database;
}

export const findPlayerById = async (
    id: number
): Promise<IPlayerModel | undefined> => {
    return database.find((
        player
    ) => player.id === id);
}