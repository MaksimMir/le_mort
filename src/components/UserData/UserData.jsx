import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilms, getStarship } from "./user.action";
import './UserData.scss'

const UserData = ({ data }) => {
    const { films, starships } = useSelector(state => state.dataUser);
    const dispatch = useDispatch();

    useEffect(() => {
        for (let i = 0; i < data.films.length; i++) {
            const film = data.films[i];
            dispatch(getFilms(film))
        }
    }, [data])

    useEffect(() => {
        for (let i = 0; i < data.starships.length; i++) {
            const ship = data.starships[i];
            dispatch(getStarship(ship))
        }
    }, [data])
    
    return (
        <table className="data__table">
            <tbody>
                <tr className="data__table-tr">
                    <td className="data__table-td">Name</td>
                    <td className="data__table-td">{data.name}</td>
                </tr>
                <tr className="data__table-tr">
                    <td className="data__table-td">Films</td>
                    <td className="data__table-td">
                        <ul>
                            {films?.map((el, id) => {
                                return (
                                    <li key={id}>{el.title}</li>
                                )
                            })}
                        </ul>
                    </td>
                </tr>
                <tr className="data__table-tr">
                    <td className="data__table-td">Starship</td>
                    <td className="data__table-td">
                        <ul>
                            {starships?.map((el, id) => {
                                return (
                                    <li key={id}>{el.name}</li>
                                )
                            })}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserData;