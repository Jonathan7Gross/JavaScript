var building = {
    number_levels : 4,
    number_of_apt_by_level : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants : ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent:  {
        "Sarah": [3, 2000],
        "Dan":  [4, 1000],
        "David": [1, 10],
    },
}

document.write(building.number_levels) //4
document.write(building.number_of_apt_by_level[0] , [2]) //3 //9
document.write(building.name_of_tenants[1]) // Dan

