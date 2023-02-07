const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const dayValidator = (args) => {
    if(Array.isArray(args)){
        const actualDays = args?.filter(day => {
            return days?.find(data => {
                return data == day;
            });
        });
        return actualDays;
    }else{
        return [];
    }
}

export default dayValidator;
    