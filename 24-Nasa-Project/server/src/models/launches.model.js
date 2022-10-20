const launches = new Map()

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Expolorer IS1',
    launchDate: new Date('December 27,2030'),
    target: 'Kepler-442 b',
    customers: ['NASA', 'KURSAT KARSLi'],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch)
function getAllLaunches () {
    return Array.from(launches.values())
}
module.exports = {
    getAllLaunches
}