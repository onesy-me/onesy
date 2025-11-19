import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthFilled = (props: IIcon) => {

  return (
    <Icon
      name='SouthFilled'

      short_name='South'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-97q-8 0-15-2.5t-13-8.5L228-332q-11-11-11-28t11-28q12-12 28.5-11.5T284-388l156 155v-607q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v607l155-155q12-12 28.5-12t28.5 12q11 12 11 28.5T732-332L508-108q-6 6-13 8.5T480-97Z"/>
    </Icon>
  );
};

IconMaterialSouthFilled.displayName = 'OnesyIconMaterialSouthFilled';

export default IconMaterialSouthFilled;
