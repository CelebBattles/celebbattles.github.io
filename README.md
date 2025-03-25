# CelebBattles

A modern web application that tracks and displays celebrity battle rankings based on community votes from r/CelebBattles. The application features real-time ELO ratings, head-to-head statistics, and detailed performance analytics.

## Features

- **Live Rankings**: Track celebrity rankings based on ELO rating system
- **Detailed Statistics**: View comprehensive stats including win rates, battle history, and rating progression
- **Head-to-Head Comparisons**: Compare any two celebrities with detailed matchup statistics
- **Interactive Charts**: Visualize rating history with zoomable and pannable charts
- **Recent Form**: Track recent performance with color-coded battle indicators
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Real-time Updates**: Dynamic battle counter showing community activity

## Technology Stack

- React 18
- Chart.js with zoom plugin
- Tailwind CSS
- Google Analytics
- Reddit API integration

## Components

- **Home Page**: Features top-ranked celebrities and latest community battles
- **Leaderboard**: Complete ranking list with sortable columns
- **Celebrity Details**: Individual profile pages with comprehensive statistics
- **Compare Page**: Head-to-head comparison tool with historical data
- **Search**: Quick access to any celebrity profile

## Installation

1. Clone the repository:
```bash
git clone https://github.com/celebbattles/celebbattles.github.io.git
```

2. Navigate to the project directory:
```bash
cd celebbattles.github.io
```

3. Open `index.html` in a web browser or serve using a local server.

## Data Structure

The application relies on three main JSON files:

- `rankings.json`: Current rankings and statistics
- `rating_histories.json`: Historical rating data
- `form.json`: Recent battle results

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- r/CelebBattles community for battle data
- Chart.js for visualization capabilities
- Tailwind CSS for styling
