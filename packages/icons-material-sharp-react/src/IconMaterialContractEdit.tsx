import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContractEdit = (props: IIcon) => {

  return (
    <Icon
      name='ContractEdit'

      short_name='ContractEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360Zm120 320H200h280Zm0 80H240q-50 0-85-35t-35-85v-120h120v-560h600v280l-80 80v-280H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80Zm80 0v-123l263-262 123 122L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
    </Icon>
  );
};

IconMaterialContractEdit.displayName = 'OnesyIconMaterialContractEdit';

export default IconMaterialContractEdit;
