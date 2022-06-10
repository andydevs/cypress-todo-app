/**
 * Example app for testing cypress
 * 
 * @author  Anshul Kharbanda
 * @created 6 - 6 - 2022
 */
import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Flag, FlagFill } from 'react-bootstrap-icons';

export function Priority() {
    const [value, setValue] = useState(0)

    return (
        <ButtonGroup 
            className='mx-4' 
            data-cy="todo-item-priorities">
            <Button 
                active={value === 0}
                data-cy="priority-0"
                variant="link"
                onClick={() => setValue(0)}>
                { value === 0 && <FlagFill size={18} color='grey'/> || <Flag size={18} color='grey'/> }
            </Button>
            <Button 
                active={value === 1}
                data-cy="priority-1"
                variant="link"
                onClick={() => setValue(1)}>
                { value === 1 && <FlagFill size={18} color='blue'/> || <Flag size={18} color='blue'/> }
            </Button>
            <Button 
                active={value === 2}
                data-cy="priority-2"
                variant="link"
                onClick={() => setValue(2)}>
                { value === 2 && <FlagFill size={18} color='orange'/> || <Flag size={18} color='orange'/> }
            </Button>
            <Button 
                active={value === 3}
                data-cy="priority-3"
                variant="link"
                onClick={() => setValue(3)}>
                { value === 3 && <FlagFill size={18} color='red'/> || <Flag size={18} color='red'/> }
            </Button>
        </ButtonGroup>
    )
}