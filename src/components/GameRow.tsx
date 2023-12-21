import './gamerow.css';
import GameTile from './GameTile';

const GameRow = () => {
    return (
        <>
            <div className="row">
                <GameTile id="1" />
                <GameTile id="2" />
                <GameTile id="3" />
                <GameTile id="4" />
                <GameTile id="5" />
            </div>
        </>
    );
};

export default GameRow;
