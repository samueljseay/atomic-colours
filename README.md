# Atomic Colours

### Usage

    import {BLUE_DARK, hover} from 'atomic-colours';
    import {css} from 'glamor';
    
    const style = css({
      backgroundColor: BLUE_DARK,
      '&:hover': {
        backgroundColor: hover(BLUE_DARK)
      }
    });
    export default Button = () => <div {...style}>Press Me!</div>;
    
