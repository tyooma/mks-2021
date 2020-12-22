import * as React from 'react';
import classes from './Event.module.css';



function Event(props) {
    return <div className={classes.eventBlock}>
        <div className={classes.eventBlock_header}>
            {props.event.title}
        </div>
        <div className={classes.eventBlock_body}>
            <div className={classes.eventBlock_body_image}>
                <img src={props.event.image} alt="" />
            </div>
            <div className={classes.eventBlock_body_description}>
                {props.event.description}
            </div>
        </div>
    </div>
}
export default Event;