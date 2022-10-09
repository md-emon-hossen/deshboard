import "./container.css";

const Container = ({ children }) => {
    return (
        <div className="wrp">
            {
                children
            }
        </div>
    );
};

export default Container;