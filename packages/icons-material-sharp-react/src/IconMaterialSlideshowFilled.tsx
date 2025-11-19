import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSlideshowFilled = (props: IIcon) => {

  return (
    <Icon
      name='SlideshowFilled'

      short_name='Slideshow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m380-300 280-180-280-180v360ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialSlideshowFilled.displayName = 'OnesyIconMaterialSlideshowFilled';

export default IconMaterialSlideshowFilled;
