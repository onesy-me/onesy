import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeWorkFilled = (props: IIcon) => {

  return (
    <Icon
      name='HomeWorkFilled'

      short_name='HomeWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM40-120v-400l280-200 280 200v400H400v-240H240v240H40Zm640 0v-440L400-762v-78h520v720H680Z"/>
    </Icon>
  );
};

IconMaterialHomeWorkFilled.displayName = 'OnesyIconMaterialHomeWorkFilled';

export default IconMaterialHomeWorkFilled;
