import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventListFilled = (props: IIcon) => {

  return (
    <Icon
      name='EventListFilled'

      short_name='EventList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-120v-320h320v320H560ZM80-240v-80h360v80H80Zm480-280v-320h320v320H560ZM80-640v-80h360v80H80Z"/>
    </Icon>
  );
};

IconMaterialEventListFilled.displayName = 'OnesyIconMaterialEventListFilled';

export default IconMaterialEventListFilled;
