export default async function TestPage(){
    const res = await fetch("https://webbackend-production-6dc5.up.railway.app/applications");
    const data = await res.json();
    
    return(
        <div>
            <h1>Test: Bewerbungsdaten</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}