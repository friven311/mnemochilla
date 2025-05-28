import { Image, StyleSheet, Text, View } from 'react-native';
import BulgedCard from './BulgedCard';

const ReviewCard = () => (
    <BulgedCard style={styles.container}>
        {/* Левая часть: текст */}
        <View style={styles.textBlock}>
            <Text style={styles.wordsCount}>15 Слов</Text>
            <Text style={styles.title}>Слова Для{"\n"}Повтора</Text>
        </View>
        {/* Правая часть: круги и иконка */}
        <View style={styles.iconWrapper}>
            <View style={styles.bgCircle1} />
            <View style={styles.bgCircle2} />
            <View style={styles.bgCircle3} />
            <Image source={require('../../assets/images/reviewBox.png')} style={styles.icon} />
        </View>
    </BulgedCard>
);

const styles = StyleSheet.create({
    container: {
        padding: 0,
        margin: 16,
    },
    iconWrapper: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginLeft: 16,
    },
    bgCircle1: {
        position: 'absolute',
        width: 168,
        height: 168,
        borderRadius: 168,
        backgroundColor: '#FFFFFF',
        opacity: 0.04,
    },
    bgCircle2: {
        position: 'absolute',
        width: 130,
        height: 130,
        borderRadius: 130,
        backgroundColor: '#FFFFFF',
        opacity: 0.04,
    },
    bgCircle3: {
        position: 'absolute',
        width: 86,
        height: 86,
        borderRadius: 86,
        backgroundColor: '#FFFFFF',
        opacity: 0.04,
    },
    icon: {
        width: 77.92,
        height: 63.04,
        zIndex: 2,
    },
    textBlock: {
        flex: 1,
    },
    wordsCount: {
        color: '#D975BB',
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 4,
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },
});

export default ReviewCard;
