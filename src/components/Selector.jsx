import styled from 'styled-components'
import { useState } from 'react'

const DropDownContainer = styled.div`
    position: absolute;
    right: 0;
    cursor: pointer;
    width: 200px;
    font-family: 'Inter', sans-serif;
    text-align: center;
    font-size: 0.8rem;
    
    div {  
    margin-bottom: 0.3rem;
    padding: 10px 15px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    border-radius: 5px;
    line-height: 1.43;
    }
`;

const DropDownList = styled.ul`
    height: 180px;
    overflow-x: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    width: 100%;
    background: #FFFFFF;
    
    /* width */
    ::-webkit-scrollbar {
    width: 1rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #FFFFFF;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #faf09e;
    }
    
    li {
        padding: 10px 15px;
        list-style: none;
    }
`;


export default function Selector({ setCategoryNumber }) {
    const [isOpen, setIsOpen] = useState(false);
    const [chosenCategory, setChosenCategory] = useState(null);

    function toggle() {
        setIsOpen(!isOpen)
    }
    function handleChoice(value, num) {
        setCategoryNumber(num)
        setChosenCategory(value)
        setIsOpen(false)
    };


    const choices = ['Any Category', 'General Knowledge', 'Books', 'Film', 'Music', 'Musicals and Theatres', 'Television', 'Video Games', 'Board Games', 'Science and Nature', 'Computers', 'Mathematics', 'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Vehicles', 'Comics', 'Gadgets', 'Anime and Manga', 'Cartoon and Animations']

    const options = choices.map((option, index) => {
        let num = option === 'Any Category' ? 0 : index + 8
        return (
            <li onClick={() => handleChoice(option, num)} key={index}>
                {option}
            </li>
        )
    });

    return (
        <DropDownContainer>
            <div onClick={toggle}>
                {chosenCategory || "Choose the Category"}
            </div>
            {isOpen && (
                <DropDownList>
                    {options}
                </DropDownList>
            )}
        </DropDownContainer>
    );
}