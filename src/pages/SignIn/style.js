import { color } from '../../style';
import { moderateScale, verticalScale } from '../../helpers/scale';

const style = {
    container: { 
        flex            : 1 , 
        justifyContent  : 'center',
        backgroundColor : color.yellow
    },
    content: { 
        backgroundColor  : color.white, 
        height           : 370, 
        marginHorizontal : 10, 
        padding          : 10, 
        shadowColor      : color.greyD, 
        shadowOffset     : { 
            width        : 5, 
            height       : 2 
        }, 
        shadowOpacity    : 0.8, 
        shadowRadius     : 7,
    }
}

export default style