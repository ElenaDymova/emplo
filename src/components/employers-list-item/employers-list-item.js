import './employers-list-item.css'

const EmployersListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, like} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }
    if (like) {
        classNames += ' like'; // Добавляем класс like, если состояние like true
    }

    return (
        <li className={classNames}>
            <span 
                onClick={onToggleProp} 
                className="list-group-item-label" 
                data-toggle="like"
                style={{fontSize: '40px', color: 'red'}}
                >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
} 

export default EmployersListItem;