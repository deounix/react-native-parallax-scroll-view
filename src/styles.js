const StyleSheet = require('react-native').StyleSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  parallaxHeaderContainer: {
    backgroundColor: '#FFFFFF',
    overflow: 'hidden'
  },
  parallaxHeader: {
    backgroundColor: '#FFFFFF',
    overflow: 'hidden'
  },
  backgroundImage: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    top: 0
  },
  stickyHeader: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0
  },
  scrollView: {
    backgroundColor: '#FFFFFF'
  }
});

module.exports = styles;
