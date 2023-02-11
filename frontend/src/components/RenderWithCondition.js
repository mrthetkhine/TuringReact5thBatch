export default function RenderWithCondition({flag})
{
    console.log('Flag ',typeof flag);
    return flag && <div>
        It render due to flag
    </div>;
}