import GameRow from './GameRow';

const Board = () => {
    return (
        <div id="board" style="width: 350px height: 420px">
            <GameRow />
            <GameRow />
            <GameRow />
            <GameRow />
            <GameRow />
        </div>
    );
};

export default Board;
