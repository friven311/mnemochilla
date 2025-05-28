import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';

type ProgressCardProps = {
    title: string;
    progress: number; // от 0 до 1
    level?: string;
};

const getCardStyle = (title: string) => {
    switch (title) {
        case 'Существительные':
            return { backgroundColor: '#EA7DCA', bar: '#00FF00' };
        case 'Глаголы':
            return { backgroundColor: '#A6D8F7', bar: '#F7B731' };
        case 'Прилагательные':
            return { backgroundColor: '#E2D9F7', bar: '#A259FF' };
        default:
            return { backgroundColor: '#EA7DCA', bar: '#00FF00' };
    }
};

const ProgressCard: React.FC<ProgressCardProps> = ({ title, progress, level = 'A1' }) => {
    const { backgroundColor, bar } = getCardStyle(title);
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.content}>
                {/* Уровень и title на одной строке */}
                <View style={styles.rowTitle}>
                    <View style={styles.levelCircle}>
                        <Text style={styles.levelText}>{level}</Text>
                    </View>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
                </View>
                {/* Прогресс-бар и процент на одной строке */}
                <View style={styles.rowProgress}>
                  <Text style={styles.percent}>{Math.round(progress * 100)}%</Text>
                    <ProgressBar progress={progress} color={bar} style={styles.progressBar} />
                    
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 16,
        margin: 8,
        width: 280,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    rowTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    levelCircle: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        alignItems: 'center',
        marginRight: 10,
    },
    levelText: {
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 16,
    },
    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        flexShrink: 1,
    },
    rowProgress: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,

    },
    progressBar: {
        height: 8,
        borderRadius: 8,
        width: 180,
        marginRight: 10,
    },
    percent: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        
        fontSize: 16,
        minWidth: 36,
        textAlign: 'right',
        paddingHorizontal: 10,

    },
});

export default ProgressCard;