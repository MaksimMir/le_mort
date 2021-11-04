import './Cards.scss';
import { Route, Switch } from "react-router";
import Ask1 from './Card/Ask1/Ask1';
import Ask2 from './Card/Ask2/Ask2';
import Ask3 from './Card/Ask3/Ask3';
import Ask4 from './Card/Ask4/Ask4';
import SoundMessage from './Card/SoundMessage/SoundMessage';
import Info from './Card/Info/Info';

const Cards = () => {
    return (
        <div className="card">
            <Switch>
                <Route path="/cards/2">
                    <Ask1 />
                </Route>
                <Route path="/cards/3">
                    <Ask2 />
                </Route>
                <Route path="/cards/4">
                    <Ask3 />
                </Route>
                <Route path="/cards/5">
                    <Ask4 />
                </Route>
                <Route path="/cards/sound">
                    <SoundMessage />
                </Route>
                <Route path="/cards/info">
                    <Info />
                </Route>
                <Route path="/cards/*">
                    <p className="errorPage">404</p>
                </Route>
            </Switch>
        </div>
    )
}

export default Cards;