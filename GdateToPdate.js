export function calculate(Gdate){
    let GdateAsDate = new Date(Gdate);

    return GdateAsDate.toLocaleDateString("fa-IR");
}