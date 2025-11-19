import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMp = (props: IIcon) => {

  return (
    <Icon
      name='Mp'

      short_name='Mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialMp.displayName = 'OnesyIconMaterialMp';

export default IconMaterialMp;
