import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitionSlideFilled = (props: IIcon) => {

  return (
    <Icon
      name='TransitionSlideFilled'

      short_name='TransitionSlide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640h240v640H40Zm320 0v-640h560v640H360Z"/>
    </Icon>
  );
};

IconMaterialTransitionSlideFilled.displayName = 'OnesyIconMaterialTransitionSlideFilled';

export default IconMaterialTransitionSlideFilled;
