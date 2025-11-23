import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Paragraph, Text, Surface, Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const TestimonialsSection = ({ data }) => {
    return (
        <View style={styles.testimonialsSection}>
            <Text style={[styles.sectionTitle, { paddingHorizontal: 20 }]}>Kullanıcılarımız Ne Diyor?</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
            >
                {data.map((item) => (
                    <Surface key={item.id} style={styles.testimonialCard}>
                        <View style={styles.testimonialHeader}>
                            <Avatar.Text size={40} label={item.avatar} style={{ backgroundColor: item.color }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.testimonialName}>{item.name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <MaterialCommunityIcons key={i} name="star" size={14} color="#FFD700" />
                                    ))}
                                </View>
                            </View>
                        </View>
                        <Paragraph numberOfLines={3} style={styles.testimonialComment}>
                            "{item.comment}"
                        </Paragraph>
                    </Surface>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    testimonialsSection: { marginBottom: 10 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333' },
    testimonialCard: {
        width: width * 0.7,
        padding: 20,
        marginRight: 15,
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#eee'
    },
    testimonialHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    testimonialName: { fontWeight: 'bold', fontSize: 15, color: '#333' },
    testimonialComment: { fontSize: 13, color: '#555', lineHeight: 20 },
});

export default TestimonialsSection;