import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewListFilled = (props: IIcon) => {

  return (
    <Icon
      name='ViewListFilled'

      short_name='ViewList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160h520v-160H360v160ZM80-640h200v-160H80v160Zm0 240h200v-160H80v160Zm0 240h200v-160H80v160Zm280-240h520v-160H360v160Zm0-240h520v-160H360v160Z"/>
    </Icon>
  );
};

IconMaterialViewListFilled.displayName = 'OnesyIconMaterialViewListFilled';

export default IconMaterialViewListFilled;
