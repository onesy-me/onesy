import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBeenhere = (props: IIcon) => {

  return (
    <Icon
      name='Beenhere'

      short_name='Beenhere'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40 160-280v-600h640v600L480-40Zm0-100 240-180v-480H240v480l240 180Zm-42-220 226-226-56-58-170 170-84-84-58 56 142 142Zm42-440H240h480-240Z"/>
    </Icon>
  );
};

IconMaterialBeenhere.displayName = 'OnesyIconMaterialBeenhere';

export default IconMaterialBeenhere;
