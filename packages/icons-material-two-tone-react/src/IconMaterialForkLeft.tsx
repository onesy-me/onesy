import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForkLeft = (props: IIcon) => {

  return (
    <Icon
      name='ForkLeft'

      short_name='ForkLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M9.41,15.59L8,17l-4-4l4-4l1.41,1.41L7.83,12c1.51-0.33,3.73,0.08,5.17,1.36l0-6.53l-1.59,1.59L10,7l4-4l4,4l-1.41,1.41 L15,6.83V21l-2,0v-4c-0.73-2.58-3.07-3.47-5.17-3L9.41,15.59z"/></g>
    </Icon>
  );
};

IconMaterialForkLeft.displayName = 'OnesyIconMaterialForkLeft';

export default IconMaterialForkLeft;
