import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeUp = (props: IIcon) => {

  return (
    <Icon
      name='SwipeUp'

      short_name='SwipeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M245-400q-51-64-78-141t-27-159q0-27 3-54t9-54l-70 70-42-42 140-140 140 140-42 42-65-64q-7 25-10 50.5t-3 51.5q0 70 22.5 135.5T288-443l-43 43Zm59 147 38-83 116-9-126-344 75-28 162 445-100 7 147 68 247-90-97-262 75-28 125 338-355 129-307-143Zm264-139-68-188 75-28 69 188-76 28Zm113-41-55-150 75-28 55 150-75 28Zm5 79Z"/>
    </Icon>
  );
};

IconMaterialSwipeUp.displayName = 'OnesyIconMaterialSwipeUp';

export default IconMaterialSwipeUp;
