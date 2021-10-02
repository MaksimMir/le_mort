import './Cards.scss';
import { Route, Switch } from "react-router";
import Ask1 from './Card/Ask1/Ask1';

const Cards = () => {
    return (
        <div className="card">
            <Switch>
                <Route path="/cards/ask1">
                    <Ask1 />
                </Route>
            </Switch>
        </div>
    )
}

export default Cards;