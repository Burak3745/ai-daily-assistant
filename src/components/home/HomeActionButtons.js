import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const HomeActionButtons = ({ onNavigate }) => {
    return (
        <View style={styles.actionContainer}>
            <Button
                mode="contained"
                icon="notebook-edit-outline"
                style={[styles.button, styles.primaryButton]}
                labelStyle={{ fontSize: 16, paddingVertical: 5 }}
                onPress={() => onNavigate(1)}
            >
                Günlük Yazmaya Başla
            </Button>

            <Button
                mode="outlined"
                icon="chart-timeline-variant"
                style={styles.button}
                onPress={() => onNavigate(2)}
            >
                Geçmişi İncele
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    actionContainer: { padding: 20, marginTop: 10 },
    button: { marginBottom: 15, borderRadius: 10 },
    primaryButton: { backgroundColor: '#6200ee' },
});

export default HomeActionButtons;