import {LoadMore} from './Button.styled'

function Button ({onLoadNext}) {

        return <div> 
            <LoadMore onClick={onLoadNext}>Load More</LoadMore>
        </div>;
    
}

 
export default Button;