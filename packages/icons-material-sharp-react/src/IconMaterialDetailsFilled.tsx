import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetailsFilled = (props: IIcon) => {

  return (
    <Icon
      name='DetailsFilled'

      short_name='Details'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-120 400-720 400 720H80Zm136-80h224v-403L216-200Zm304 0h224L520-603v403Z"/>
    </Icon>
  );
};

IconMaterialDetailsFilled.displayName = 'OnesyIconMaterialDetailsFilled';

export default IconMaterialDetailsFilled;
