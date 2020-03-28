import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48
    },
    incidentProperty: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#41414d'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
        marginBottom: 20,
        lineHeight: 24
    },
    incidentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contact: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8
    },
    contactTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    contactText: {
        color: '#737380',
        marginTop: 16
    },
    contactButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16
    },
    contactButton: {
        backgroundColor: '#e02042',
        padding: 15,
        borderRadius: 8,
        width: '48%',
        height: 50,
        alignItems: 'center'
    },
    contactButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
});