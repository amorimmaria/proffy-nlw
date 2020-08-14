import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7'
  },

  teacherList:{
    marginTop: -40,
    
  },

  searchForm: {
    marginBottom: 24,
    marginHorizontal: -20,
    marginRight: 35,
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    marginRight:8,
    width: '60%',

  },

  input: {
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 25,
    marginTop: 4,
    marginBottom: 10,
    marginRight: 2,
  },

  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },

    submitButtonText:{
      color: '#FFF',
      fontFamily: 'Archivo_700Bold',
      fontSize: 16,
    },


  

})

export default styles;