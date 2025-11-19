import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBook = (props: IIcon) => {

  return (
    <Icon
      name='Book'

      short_name='Book'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Zm80-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"/>
    </Icon>
  );
};

IconMaterialBook.displayName = 'OnesyIconMaterialBook';

export default IconMaterialBook;
