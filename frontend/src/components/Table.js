export function Row({item})
{
    return(<>
            <td>{item}</td>
           
        </>
    );

}
export default function Table()
{
    let items= [
        'One',
        'Two',
        'Three'
    ];
    return (<div>
        <table className={"table table-striped"}>
            <tbody>
            {
                items.map((item,index) => {
                    return(<tr key={index}>
                        <Row item={item}
                                />
                    </tr>)
                })
            }
            </tbody>
        </table>
    </div>)
}