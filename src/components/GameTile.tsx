import './gametile.css';

interface Props {
    id: string;
}

const GameTile = ({ id }: Props) => {
    return <input className="tile" type="text" maxlength="1" id={id} />;
};

export default GameTile;
