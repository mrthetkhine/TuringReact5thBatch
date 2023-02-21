import {Suspense, useDeferredValue, useState} from 'react';
const ListUsers = ({ name, id }) => {
    let now = performance.now();
    while (performance.now() - now < 100) {
        // This loop is intentially here just to drag the component
        // down in a hard running loop.  It could represent something
        // like a complex calculation involving drawing a city shape
        // or something else compute intensive. It's mean to represent
        // work that can not be easily optimized or removed.
    }
    return <p key={id}>
        {name}
    </p>;
};

export default function DeferredDemo()
{
    const users = [
        {
            id: 1,
            name: "Amit Merchant"
        },
        {
            id: 2,
            name: "John Doe"
        },
        {
            id: 3,
            name: "Cherika Merchant"
        },
        {
            id: 4,
            name: "James Bond"
        },
        {
            id: 5,
            name: "Jake Sully"
        }
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const deferredSearch = useDeferredValue(searchTerm);
    return (
        <>
            <h1>List of users</h1>
            <input
                type="search"
                placeholder="Search users"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <h2>Search term: {deferredSearch}</h2>

            {users
                .filter(({ name }) => {
                    return (
                        deferredSearch.length === 0 ||
                        name.toLowerCase().includes(deferredSearch.toLowerCase())
                    );
                })
                .map((user) => (
                    <ListUsers key={user.id} name={user.name} />
                ))}
        </>
    );
}