import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import './featured.css';


const Featured = ({ title, vlu, parsent, description, type }) => {
    return (
        <div className='featuredInfo'>
            <h2>{title}</h2>
            <h1>{vlu}</h1>
            <span>{parsent} {type === "false" ? <ArrowUpward className='uparrow' /> : <ArrowDownward className='downarrow' />}</span>
            <p>{description}</p>
        </div>
    );
};

export default Featured;