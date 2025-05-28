import { Dimensions, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type CategoryCardProps = {
    title: string;
    level: string;
    image: ImageSourcePropType;
};

const getCardStyle = (title: string) => {
    switch (title) {
        case 'Существительные':
            return { backgroundColor: '#EA7DCA' };
        case 'Глаголы':
            return { backgroundColor: '#A6D8F7' };
        case 'Прилагательные':
            return { backgroundColor: '#E2D9F7' };
        default:
            return { backgroundColor: '#EA7DCA' };
    }
};

const CategoryCard: React.FC<CategoryCardProps> = ({ title, level, image }) => (
    <View style={[getCardStyle(title), styles.container]}>
        {/* Кружок с уровнем и иконка */}
        <View style={styles.levelContainer}>
            <View style={styles.levelCircle}>
                <Text style={styles.levelText}>{level}</Text>
            </View>
            <Image source={image} style={styles.icon} />
        </View>
        {/* Название и стрелка */}
        <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
            <Image source={require('../../assets/images/arrow.png')} style={styles.arrow} />
        </View>
    </View>
);

const CARD_MIN_WIDTH = 90;
const CARD_MAX_WIDTH = 160;
const CARD_BASIS = SCREEN_WIDTH * 0.36;

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 10,
        flexBasis: CARD_BASIS,
        minWidth: CARD_MIN_WIDTH,
        maxWidth: CARD_MAX_WIDTH,
        alignItems: 'center',
        marginRight: 12,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
    levelCircle: {
        paddingVertical: 2,
        alignItems: 'center',
    },
    levelText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 23,
    },
    icon: {
        width: 64,
        height: 63,
        flexShrink: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        flexShrink: 1,
        maxWidth: '70%',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
        width: '100%',
    },
    arrow: {
        width: 18,
        height: 18,
        marginLeft: 6,
        resizeMode: 'contain',
        flexShrink: 0,
    },
    levelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginBottom: 4,
    },
});

export default CategoryCard;