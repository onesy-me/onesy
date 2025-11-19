import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraftsW100 = (props: IIcon) => {

  return (
    <Icon
      name='DraftsW100'

      short_name='Drafts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-858 348 206v480H132v-480l348-206Zm0 404 312-186-312-186-312 186 312 186Zm0 32L160-612v412h640v-412L480-422Zm0 222h320-640 320Z"/>
    </Icon>
  );
};

IconMaterialDraftsW100.displayName = 'OnesyIconMaterialDraftsW100';

export default IconMaterialDraftsW100;
