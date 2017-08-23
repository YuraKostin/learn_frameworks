import React, {Component} from 'react';
import './paginator.css';

export default function Paginator({pagesNumber, handlePageChange, currentPageNumber}) {
    const onClick = (number) => () => handlePageChange(number);
    const getItemStyle = (index) => {
        return currentPageNumber === index ? 'paginator__item paginator__item_active' :
            'paginator__item';
    };
    const paginatorItems = [];

    for (let i = 1; i <= pagesNumber; i++) {
        paginatorItems.push(
            <li
                className={getItemStyle(i)}
                key={i}
                onClick={onClick(i)}>{i}</li>
        );
    }

    return <ul className="paginator">
        {paginatorItems}
    </ul>;
}