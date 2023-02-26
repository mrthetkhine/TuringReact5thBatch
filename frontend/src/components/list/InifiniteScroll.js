import { faker } from '@faker-js/faker';
import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroller";
export default function InifiniteScroll()
{
    const data = new Array(1000).fill().map((value, index) => ({
        id: index,
        name: faker.name.firstName(5),
        body: faker.lorem.paragraph(8),
    }));
    const showItems = (posts) => {
        var items = [];
        for (var i = 0; i < records; i++) {
            items.push(
                <div className="post" key={posts[i].id}>
                    <h3>{`${posts[i].name} - ${posts[i].id}`}</h3>
                    <p>{posts[i].body}</p>
                </div>
            );
        }
        return items;
    };
    const itemsPerPage = 20;
    const [hasMore, setHasMore] = useState(true);
    const [records, setrecords] = useState(itemsPerPage);
    const loadMore = () => {
        if (records === data.length) {
            setHasMore(false);
        } else {
            console.log('Loading more');
            setTimeout(() => {
                setrecords(records + itemsPerPage);
            }, 2000);
        }
    };
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={<h4 className="loader">Loading...</h4>}
            useWindow={false}
        >
            {showItems(data)}
        </InfiniteScroll>
    );
}